import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner'

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      success: false,
      url: ""
    }
  }

  handleChange = (ev) => {
    this.setState({ success: false, url: "" });

  }
  // Perform the upload
  handleUpload = (ev) => {
    this.setState({ loading: true })
    let file = this.uploadInput.files[0];
    const data = new FormData();
    data.append('image', file)
    // Split the filename to get the name and type
    // let fileParts = this.uploadInput.files[0].name.split('.');
    // let fileName = fileParts[0];
    // let fileType = fileParts[1];
    console.log("Preparing the upload");
    axios.post("https://kansha-staging.herokuapp.com/profile-pic", data)
      .then(response => {
        // console.log(response.data.url)
        //   var returnData = response.data.data.returnData;
        //   var signedRequest = returnData.signedRequest;
        var url = response.data.url;
        this.setState({ url: url })
        this.setState({ success: true, loading: false });

        //   console.log("Recieved a signed request " + signedRequest);

        // Put the fileType in the headers for the upload
        //   var options = {
        //     headers: {
        //       'Content-Type': fileType
        //     }
        //   };
        //      axios.put("http://localhost:8000/users/1",file)
        //   .then(result => {
        //     console.log("Response from s3")
        //     // this.setState({success: true});
        //   })
        //   .catch(error => {
        //     alert("ERROR " + JSON.stringify(error));
        //   })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {

    const SuccessMessage = () => (
      <div style={{ padding: 50 }}>
        <h3 style={{ color: 'green' }}>SUCCESSFUL UPLOAD</h3>
        <img src={this.state.url} style={{ maxWidth: '70%', imageOrientation: "from-image" }} alt="uploaded profile" />
        <br />
      </div>
    )
    return (
      <div className="App">
        <center>
          <h1>Upload Your Profile Picture</h1>
          {this.state.loading ? <Loader
            type="Rings"
            color="#EE4D71"
            height={100}
            width={100}
            timeout={10000}

          /> : null}
          {this.state.success ? <SuccessMessage />
            :
            <div className="file-upload">
              <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file" />
              <br />
              <button onClick={this.handleUpload}>Upload</button>
            </div>
          }
        </center>
      </div>
    );
  }
}
export default FileUpload;