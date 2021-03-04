import React,{Fragment,useEffect,useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import MovieCard from '../Components/MovieCard';
import 'antd/dist/antd.css';
import {Input, Row, Col} from "antd";

const {Search}=Input;

const onSearch = value => console.log(value);

const Movie_Search =()=> {
   const [query,setQuery]=useState("");
   const [items,setItems]=useState();

    
const getSearchMovie=async()=>{
        console.log("getSearchMovie");

        const ID_KEY="rVT5ICuUPhyW6ATvcSSa";
        const SECRET_KEY="GMzcno2UOj";
        try{
            if(query=== ""){
                
            } else{
                const {data: {
                    items
                }}=await axios.get('/v1/search/movie.json',{
                    params:{
                        query: query,
                        display:30
                    },
                    headers:{
                        'X-NAVER-CLIENT-ID':ID_KEY,
                        'X-NAVER-CLIENT-SECRET':SECRET_KEY
                    }
                });
                setItems(items);
             console.log("성공!"+items)
            }
        } catch(error){
            console.log("실패!");
            console.log(error);
        }
    };

   
const handleChange=(e:any)=>{
        /*input 이벤트인 onChange를 사용하여 검색어를 입력하면 실시간으로 검색정보(value)를 state에 저장한다.*/
       console.log("handleChange에 왔음"+e.type+":",e.target.value);
        setQuery(e.target.value);
    };
const handleSubmit=(e:any)=>{
        /*input box에서 엔터를 입력시 정보가 전송되는 기본 이벤트 */
        console.log("handleSubmit에 왔음"+e.type+":",e.target.value);
        e.preventDefault();
        getSearchMovie();
    };

 

    return(
     <Fragment>
    <div style={{display:'flex', justifyContent:'center', padding:'3rem'}}>
        <Search placeholder="영화를 검색해 보세요! :D" type="text" 
        onChange={handleChange} onSearch={getSearchMovie} onClick={getSearchMovie}
        /*아하 이게 antd를 통한 custom된 버튼이기에 onSearch에서 함수를 호출해야되나보다 */ enterButton  />
    </div>
    <div>
       <Row>
           {items && items.map((movie)=>{
               return(
                   <Col xs={24} sm={12} md={6} lg={4} xl={4}>
                       <MovieCard item={movie}></MovieCard>
                   </Col>
               )
           })}
       </Row>
    </div>
    </Fragment>
    );
};


export default Movie_Search;







