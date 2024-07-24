"use client";
import { useAddLogin, useAddRegister, useGetUser } from "@/apis/auth";
import useAuthModalStore from "@/states/AuthModelStates";
import useAuthState from "@/states/AuthState";
import { Button, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";

export default function Auth() {
  const { openModal, closeModal, isOpen } = useAuthModalStore();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const { isAuthenticated, logout, login, register, user } = useAuthState();
  const {data} = useGetUser();
  const {
    mutate: addLogin,
    isSuccess: isLoginSuccess,
    data: loginData,
  } = useAddLogin();
  const {
    mutate: addRegister,
    isSuccess: isRegisterSuccess,
    data: registerData,
  } = useAddRegister();
  const [attemps, setattemps] = useState(0);
  const [mount, setmount] = useState(false);

  useEffect(() => {
    if (!mount) {
      setmount(true);
    }
  }, []);

  useEffect(() => {
      console.log("sssssssssssssssssss")
      if (data) {
        console.log("bbbbbbbbbbbbbb")

        setattemps(data?.attemps);
      }
    
   
  }, [data]);

  const onFinish = () => {
    if (isLogin) {
      addLogin({ email, password });
    } else {
      addRegister({ email, password, name });
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      login({
        token: loginData?.token,
        user: loginData?.user,
      });
    }
    closeModal();
  }, [isLoginSuccess]);


  useEffect(() => {
    if (isRegisterSuccess) {
      register({
        token: registerData?.token,
        user: registerData?.user,
      });
    }
    closeModal();
  }, [isRegisterSuccess]);

  useEffect(() => {
    if (user?.attemps) {
      setattemps(user?.attemps);
    }
  }, [user]);

  if (!mount) {
    return <></>;
  }
  return (
    <div className="auth">
      <Button
        onClick={() => {
          if (!isAuthenticated) {
            openModal();
          } else {
            logout();
          }
        }}
        className="auth__button"
      >
        {isAuthenticated ? (
          <>attemps {attemps}</>
        ) : isLogin ? (
          "Login"
        ) : (
          "Register"
        )}
      </Button>
      <Modal
        className="auth__modal"
        footer={[
          <Button onClick={() => setIsLogin(!isLogin)} type="primary">
            {isLogin ? "Register" : "Login"}
          </Button>,
          <Button key="back" onClick={closeModal}>
            Close
          </Button>,
          <Button
            onClick={() => {
              if (email.length > 0 && password.length > 0) {
                onFinish();
              }
            }}
            key="submit"
            type="primary"
          >
            Submit
          </Button>,
        ]}
        open={isOpen}
        onOk={closeModal}
        onCancel={closeModal}
      >
        <div className="auth__modal-container">
          <div className="login">
            <h1 className="login__title">{isLogin ? "Login" : "Register"}</h1>
            {isLogin ? null : (
              <Input
                placeholder="Full Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              ></Input>
            )}
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            ></Input>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            ></Input>
          </div>
        </div>
      </Modal>
    </div>
  );
}
