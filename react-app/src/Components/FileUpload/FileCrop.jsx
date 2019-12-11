import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        margin: '12rem',
      },
}));

function Cropper() {
    const classes = useStyles();
    const [ imageRef, setImageRef ] = useState()
    const [ src, setSrc ] = useState({})
    const [ croppedImg, setCroppedImg ] = useState()
    const [ tool, setTool ] = useState({
         crop: {
            unit: '%',
            width: '30',
            aspect: 1/1,
    }});

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
            console.log(croppedImageUrl)
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
            canvas.toBlob(blob => {
                if (!blob) {
                    return
                }
                blob.name = fileName;
                window.URL.revokeObjectURL(croppedImg)
                let fileUrl = (window.URL.createObjectURL(blob))
                resolve(fileUrl)
            }, 'image/jpeg');
        })
}

    return (
        <div class='crop' className={classes.root}>
            <div>
            <input type="file" accept="image/*" onChange={onSelectFile} />
        </div>
            {src && (
              <ReactCrop
                src={src}
                crop={tool.crop}
                ruleOfThirds
                onImageLoaded={onImageLoaded}
                onComplete={onCropComplete}
                onChange={onCropChange}
              />
            )}
            {croppedImg && (
              <img alt="Crop" src={croppedImg} />
            )}
        </div>
    )
}

export default Cropper;
