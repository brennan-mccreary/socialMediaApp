import React, { useRef, useState, useEffect} from 'react';
import './UploadImage.css';

const UploadImage = (props) => {
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);

    const filePickerRef = useRef();

    useEffect(() => {
        if(!props.file) {
            return;
        };
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(props.file);
    }, [props.file]);

    const pickedHandler = (event) => {
        let pickedFile;
        if(event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0];
            props.setFile(pickedFile); //?
            setIsValid(true);
        } 
        else {
            setIsValid(false);
        }
    }
    
    const pickImageHandler = () => {
        filePickerRef.current.click();
    }

    return ( 
        <div className="form-control upload-image-top">
            <form onSubmit = {props.handleSubmit} encType='multipart/form-data' >
                <input
                    id='upload-image-form'
                    ref = {filePickerRef}
                    type = "file"
                    accept = ".jpg,.jpeg,.png"
                    onChange = {pickedHandler}
                />
                <div>
                    <button type='submit'>Upload</button>
                </div>
            </form>
             
        </div>
     );
}
 
export default UploadImage;