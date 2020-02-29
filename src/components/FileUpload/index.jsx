import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import { useDispatch } from 'react-redux';
import {
	uploadPicture,
	uploadBadContent,
} from '../../store/actions/user-actions';
import 'react-image-crop/lib/ReactCrop.scss';

const FileUpload = ({ close }) => {
	const [src, setSrc] = useState({});
	const [imageRef, setImageRef] = useState();
	const [croppedImg, setCroppedImg] = useState();
	const [file, setFile] = useState();
	const [tool, setTool] = useState({
		crop: {
			unit: '%',
			width: '60',
			aspect: 1 / 1,
		},
	});
	const dispatch = useDispatch();

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
			crop.height,
		);

		return new Promise(resolve => {
			let reader = new FileReader();
			canvas.toBlob(blob => {
				if (!blob) {
					return;
				}
				blob.name = fileName;
				window.URL.revokeObjectURL(croppedImg);
				let fileUrl = window.URL.createObjectURL(blob);
				resolve(fileUrl);
				reader.readAsDataURL(blob);
				setFile(blob);
			}, 'image/jpeg');
		});
	};

	const makeClientCrop = async crop => {
		if (imageRef && crop.width && crop.height) {
			const croppedImageUrl = await getCroppedImg(
				imageRef,
				crop,
				'newFile.jpg',
			);
			setCroppedImg(croppedImageUrl);
		}
	};

	const onImageLoaded = image => {
		setImageRef(image);
		makeClientCrop(tool.crop);
	};

	const onSelectFile = e => {
		if (e.target.files && e.target.files.length > 0) {
			const reader = new FileReader();
			reader.onload = event => {
				const img = new Image();
				img.src = event.target.result;
				img.onload = () => {
					const elem = document.createElement('canvas');
					const maxSize = 500;
					let { width, height } = img;
					if (width > height && width > maxSize) {
						height *= maxSize / width;
						width = maxSize;
					} else if (height > width && height > maxSize) {
						width *= maxSize / height;
						height = maxSize;
					}
					elem.width = width;
					elem.height = height;
					const ctx = elem.getContext('2d');
					ctx.drawImage(img, 0, 0, width, height);
					setSrc(elem.toDataURL());
				};
			};
			reader.readAsDataURL(e.target.files[0]);
		}
	};

	const onCropComplete = crop => {
		makeClientCrop(crop);
	};

	const onCropChange = crop => {
		setTool({ crop });
	};

	const imageTypes = types => {
		return types.map(type => `image/${type}`);
	};

	const handleUpload = async e => {
		const allowedImageTypes = imageTypes(['png', 'jpeg', 'gif']);
		if (allowedImageTypes.includes(file.type)) {
			const data = new FormData();
			data.append('image', file);
			await dispatch(uploadPicture(data));
			close();
		} else {
			dispatch(uploadBadContent(file.type, allowedImageTypes));
		}
	};

	return (
		<section id="file-upload">
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
			<input
				type="file"
				accept="image/*"
				onChange={onSelectFile}
				aria-label="upload photo"
			/>
			<button
				type="button"
				onClick={handleUpload}
				className="btn-onboarding-confirm">
				Upload
			</button>
		</section>
	);
};

export default FileUpload;
