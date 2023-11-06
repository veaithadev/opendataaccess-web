import React from 'react'
import ReactLoading from "react-loading";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './loading.module.css'

export interface LoadingProps {
  loadingText?:string
}

export function Loading(props: LoadingProps) {
  return (
    <div>
        <br></br>
        <div className='loadingContainer'>
            {(props.loadingText!=undefined) ? props.loadingText : "Loading"}
        </div>
    <div className='loadingContainer'>
     
        <br></br>
            <ReactLoading type='bars' color="#0d6efd" />
    </div>
    </div>
  )
}

export default Loading