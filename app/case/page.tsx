"use client";
import Image from 'next/image';
import {caseStudies,tags} from "@/db/caseStudy.json";
import CaseStudy from '@/componenets/caseStudy/CaseStudy';
import { Button, Checkbox, Drawer, Input } from 'antd';
import { useEffect, useState } from 'react';
import { CloseOutlined, FilterOutlined } from '@ant-design/icons';
import type { CheckboxProps } from 'antd';
import type { DrawerProps, RadioChangeEvent } from 'antd';
const Page = () => {
  const [SearchQ, setSearchQ] = useState("")
  const [checked, setChecked] = useState(false);
  const [TagQ, setTagQ] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');
  let data = caseStudies.filter((item) => {
    return item.title.toLowerCase().includes(SearchQ.toLowerCase()) && item.tags.some((tag) => TagQ.includes(tag)) && checked?item.Published:true
  }) 
  const onChange: CheckboxProps['onChange'] = (e) => {
    setChecked(e.target.checked);
  };
  useEffect(() => {
    setTagQ(tags)
  }, [])
    const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  
  return (
    <>
      <div className="home">
        <h1 className="home-page2">
          Everyday, QDeep is achieving milestones in the Quantum utility road
          & in preparing the next generation for the Quantum revolution
        </h1>
        <Image
          alt="logo"
          src="/images/header_body.png"
          width={100}
          height={100}
          className="home__header"
        />
        <Image
          src="/images/upEffect.svg"
          width={100}
          height={100}
          alt="logo"
          className="home__footer"
        />
      </div>
      <div className="trusted">
        <Image
          src="/images/downEffect.svg"
          width={100}
          height={100}
          alt="logo"
          className="trusted__footer"
        />
      </div>
      <div className="caseStudy">
        <div className="caseStudy-holder">
        <Button className='drawer' type="primary" onClick={showDrawer}><FilterOutlined /></Button>
        <Drawer
        title="Categories"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        className='drawer2'
      >
        <>
        <div className="caseStudy__filter-body">
            {TagQ.map((item,idx)=>{
              return <div key={idx} className="caseStudy__filter-item">{item} <span onClick={() => setTagQ(TagQ.filter((tag) => tag !== item))}><CloseOutlined /></span></div>
            })}
            </div>
            <div className="caseStudy__filter-pub"><Checkbox className='checkbox' checked={checked} onChange={onChange}>Published</Checkbox> </div>
        </>
      </Drawer>
        <div className="caseStudy__filter">
          <div className="caseStudy__filter-title">Categories</div>
          <div className="caseStudy__filter-body">
            {TagQ.map((item,idx)=>{
              return <div key={idx} className="caseStudy__filter-item">{item} <span onClick={() => setTagQ(TagQ.filter((tag) => tag !== item))}><CloseOutlined /></span></div>
            })}
            </div>
            <div className="caseStudy__filter-pub"><Checkbox className='checkbox' checked={checked} onChange={onChange}>Published</Checkbox> </div>
        </div>
      <div className="caseStudy-body">
      <Input className='search2' placeholder='Search' onChange={(e) => setSearchQ(e.target.value)}/>

        {
          data.map((item, idx) => (
            <CaseStudy key={idx} {...item}></CaseStudy>
          ))
        }
        </div>
        </div>
      </div>
    </>
  );
};

export default Page;