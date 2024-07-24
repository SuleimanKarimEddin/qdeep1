"use client";
import SecondHeader from "@/layout/secondNav/SecondHeader";
import { Button, Input, notification, Spin, Upload, UploadProps } from "antd";
import React, { useState } from "react";
import { UploadOutlined } from '@ant-design/icons';
import { useUploadCsv } from "@/apis/auth";
import useAuthState from "@/states/AuthState";
import useAuthModalStore from "@/states/AuthModelStates";
export default function Page() {
  const [target, settarget] = useState("")
  const [files, setfiles] = useState<File | null>(null)
  const {mutate,isPending} = useUploadCsv();
  const [api, contextHolder] = notification.useNotification();
  const {isAuthenticated} = useAuthState()
  const {openModal} = useAuthModalStore()

  const openNotification = (pauseOnHover: boolean) => () => {
    api.open({
      message: 'you should upload csv and add target column',
       showProgress: true,
      pauseOnHover,
    });
  };
  const onFinish = () => {    
    if (!isAuthenticated) {
      openModal()
      return
    }
    if (!target || !files) {
      openNotification(true)();
      return
    }
    mutate({file:files, target_column_name:target})
    setfiles(null)
    settarget("")
  }
    const props: UploadProps = {
        onChange({ file, fileList }) {
          if (file.status !== 'uploading') {
            if (file.originFileObj) {
            setfiles(file.originFileObj)}
          }
        },}
  return (
    <>
      {contextHolder}
      <SecondHeader></SecondHeader>
      <div className="qfss">
        <div className="fqs">
          <h1> Instructions:</h1>
          <h2>1. Data Requirements</h2>● File Format: Your dataset should be in
          CSV (Comma-Separated Values) format. <br /><br />● Data Type: All data should be
          numerical. Ensure that any categorical data has been appropriately
          encoded into numerical values prior to upload. <br /><br />● Target Column: The
          target column (the variable you want to predict) should be clearly
          specified and must also contain numerical values.
          <h2>2. Preparing Your Dataset</h2>● Ensure Data Consistency: Verify
          that all columns contain numerical data and that there are no missing
          values. Any preprocessing such as normalization, standardization, or
          handling of missing values should be performed before uploading the
          dataset. <br /><br />● Specify the Target Column: Clearly identify the targ
        </div>
        <div className="upload">
        <Upload  {...props}>
    <Button icon={<UploadOutlined/>}>Upload</Button>
  </Upload>
  <Input onChange={(e) => settarget(e.target.value)} value={target} placeholder='Target Column'></Input>    
  <Button disabled={isPending} onClick={onFinish}>{isPending ? <Spin style={{color:"white"}}/> : "Submit"}</Button>   
   </div>
      </div>
    </>
  );
}
