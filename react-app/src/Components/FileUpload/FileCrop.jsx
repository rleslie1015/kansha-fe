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
        background: 'linear-gradient(135deg, #EE4D71 0%, #F15A3F 100%)',
        opacity: '1',
        '&:hover': {
            color: 'white',
            transition: '0.5s ease',
          },
    }, 
    cancelButton: {
		alignSelf: 'flex-start',
		cursor: 'pointer',
	},
    cameraButton: {
        opacity: 0,
        width: '273px',
        height: '273px',
        borderRadius: '100%',
        paddingRight: '1.5rem',
        '&:hover': {
            opacity: 1,
            boxShadow: 'none',
            background: 'rgba(18, 18, 18, 0.85)',
            transition: '0.5s ease',
          },
    },
	camera: {
		width: '70%',
        height: 'auto',
    },
    picture: {
        maxHeight: '800px',
        maxWidth: '800px',
        width: '100%',
    },
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
})(({ uploadPicture, uploadBadContent }) => {

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

    const resetState = () => {
        setImageRef()
        setFile()
        setSrc({})
        setCroppedImg()
        setTool({
            crop: {
               unit: 'px',
               width: '25',
               aspect: 1/1,
       }})
    }

    const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
        setOpen(false);
        resetState()
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
                disableFocusRipple
                disableRipple
				onClick={handleOpen}
				className={classes.cameraButton}>
					<img
                        src= 'https://kansha-bucket.s3-us-west-1.amazonaws.com/cameraicon.png'
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
					<img
					src="https://kansha-bucket.s3-us-west-1.amazonaws.com/x.png"
					onClick={handleClose}
                    className={classes.cancelButton}
                    alt="close button"
						/>
                    <input type="file" accept="image/*" onChange={onSelectFile} />   
                    <div className={classes.picture}>
                    {src && (
                    <ReactCrop
                        src={src}
                        crop={tool.crop}
                        circularCrop
                        onImageLoaded={onImageLoaded}
                        onComplete={onCropComplete}
                        onChange={onCropChange}
                    />
                    )}
                    </div>
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
