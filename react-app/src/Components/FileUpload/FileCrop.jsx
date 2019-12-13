import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { uploadPicture, uploadBadContent } from '../../store/actions/user-actions';
import 'react-image-crop/dist/ReactCrop.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root:{
        margin: '12rem',
      },
      modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: '#2D2C35',
		border: '2px solid #000',
		boxShadow: 'none',
		padding: theme.spacing(2, 4, 3),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		color: 'white',
    },
    button: {
        backgroundColor: 'white',
        opacity: '1',
    }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
	const { in: open, children, onEnter, onExited, ...other } = props;
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter();
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited();
			}
		},
	});

	return (
		<animated.div ref={ref} style={style} {...other}>
			{children}
		</animated.div>
	);
});

Fade.propTypes = {
	children: PropTypes.element,
	in: PropTypes.bool.isRequired,
	onEnter: PropTypes.func,
	onExited: PropTypes.func,
};

export const Cropper = connect(({ user }) => ({ ...user }), {
	uploadPicture,
	uploadBadContent,
})(({ uploadPicture, uploadBadContent, uploadError }) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [ imageRef, setImageRef ] = useState()
    const [ file, setFile ] = useState()
    const [ src, setSrc ] = useState({})
    const [ croppedImg, setCroppedImg ] = useState()
    const [ tool, setTool ] = useState({
         crop: {
            unit: '%',
            width: '30',
            aspect: 1/1,
    }});

    const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
    };
    
    const imageTypes = types => {
        return types.map(type => `image/${type}`);
    };
    
    const handleUpload = e => {
        const allowedImageTypes = imageTypes(['png', 'jpeg', 'gif']);
        if (allowedImageTypes.includes(file.type)) {
            const data = new FormData();
            data.append('image', file);
            uploadPicture(data);
            handleClose();
        } else {
            uploadBadContent(file.type, allowedImageTypes);
        }
    };

    const onSelectFile = e => { 
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => 
                setSrc(reader.result))
            reader.readAsDataURL(e.target.files[0])
    }
    }
    
    const onImageLoaded = image => {
        console.log(image)
        setImageRef(image)
        makeClientCrop(tool.crop)
    }
    
    const onCropComplete = crop => {
        makeClientCrop(crop)
    }
    
    const onCropChange = (crop) => {
        setTool({ crop })
    }

    const makeClientCrop = async (crop) => {
        if (imageRef && crop.width && crop.height) {
            const croppedImageUrl = await getCroppedImg(
                imageRef,
                crop,
                'newFile.jpg'
            );
            setCroppedImg(croppedImageUrl)
        }
    }

    const getCroppedImg = (image, crop, fileName) => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        )

        return new Promise((resolve) => {
            let reader = new FileReader();
            canvas.toBlob(blob => {
                if (!blob) {
                    return
                }
                blob.name = fileName;
                window.URL.revokeObjectURL(croppedImg)
                let fileUrl = (window.URL.createObjectURL(blob))
                resolve(fileUrl)
                reader.readAsDataURL(blob)
                setFile(blob)
            }, 'image/jpeg');
        })
}

    return (
        <div class='crop' className={classes.root}>
            <Button
				type="button"
				onClick={handleOpen}
				className={classes.button}>
					<img
                        src= 'https://kansha-bucket.s3-us-west-1.amazonaws.com/hoverimage.png'
                        className={classes.camera}
						alt="upload icon"
					/>
			</Button>
            <Modal				
            className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
				    timeout: 500,
			}}>
            <Fade in={open}>
                <div className={classes.paper}>
                    <input type="file" accept="image/*" onChange={onSelectFile} />   
                    {src && (
                    <ReactCrop
                        src={src}
                        crop={tool.crop}
                        // ruleOfThirds
                        circularCrop
                        onImageLoaded={onImageLoaded}
                        onComplete={onCropComplete}
                        onChange={onCropChange}
                    />
                    )}
                <Button
                	type="button"
				    onClick={handleUpload}
				    className={classes.button}>
				        Upload
			</Button>
                </div>
            </Fade>
            </Modal>
        </div>
    )
})
