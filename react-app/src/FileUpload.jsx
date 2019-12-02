import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      url: ""
    }
  }

  handleChange = (ev) => {
    this.setState({ success: false, url: "" });

  }
  // Perform the upload
  handleUpload = (ev) => {
    let file = this.uploadInput.files[0];
    const data = new FormData();
    data.append('image', file)
    // Split the filename to get the name and type
    // let fileParts = this.uploadInput.files[0].name.split('.');
    // let fileName = fileParts[0];
    // let fileType = fileParts[1];
    console.log("Preparing the upload");
    axios.post("http://localhost:8000/profile-pic", data)
      .then(response => {
        // console.log(response.data.url)
        //   var returnData = response.data.data.returnData;
        //   var signedRequest = returnData.signedRequest;
        var url = response.data.url;
        this.setState({ url: url })
        this.setState({ success: true });

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
        <img src={this.state.url} style={{ maxWidth: '90%' }} alt="uploaded profile" />
        <br />
      </div>
    )
    return (
      <div className="App">
        <center>
          <h1>UPLOAD A FILE</h1>
          {this.state.success ? <SuccessMessage />
            :
            <>
              <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file" />
              <br />
              <button onClick={this.handleUpload}>UPLOAD</button>
            </>
          }
        </center>
      </div>
    );
  }
}
export default FileUpload;