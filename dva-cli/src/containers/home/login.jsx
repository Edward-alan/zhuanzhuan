import React, { Component } from 'react'
import './scss/style.css'
import { Upload, Icon, message, Button  } from 'antd';

export class Login extends Component {
    state = {
        imageUrl: null,
        loading: false,
    };

    //文件上传之间的钩子函数
    beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    handleChange = info => {  //提交事件
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            console.log( info.file.response)
            this.setState({ imageUrl: info.file.response.imgUrl })
        }
    };


    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <div>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="/user/upload"   //提交接口信息
                    beforeUpload={this.beforeUpload}
                    onChange={ this.handleChange}
                >
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt="avatar"
                            style={{ width: '100%' }}
                        />
                    ) : (
                            uploadButton
                        )}
                </Upload>

                <Button type="primary" onClick={this.primary}>
                       跳到登录页
                </Button>
            </div>
        )
    }
    primary =()=>{
        this.props.history.push('/loginolder')
    }
}

export default Login