import React,{Fragment} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import MovieCard from '../Components/MovieCard';
import 'antd/dist/antd.css';
import {Input} from "antd";
const {Search}=Input;

const onSearch = value => console.log(value);

class Movie_Search extends React.Component{
    state={
        isLoading:true,
        movies:[],
        values:""
    };

    getSearchMovie=async()=>{
        const ID_KEY="rVT5ICuUPhyW6ATvcSSa";
        const SECRET_KEY="GMzcno2UOj";
        const search=this.state.value;
        try{
            if(search===""){
                this.setState({movies:[],isLoading:false})
            } else{
                const {data: {
                    items
                }}=await axios.get('https://openapi.naver.com/v1/search/movie.json',{
                    params:{
                        query:search,
                        display:30
                    },
                    headers:{
                        'X-NAVER-CLIENT-ID':ID_KEY,
                        'X-NAVER-CLIENT-SECRET':SECRET_KEY
                    }
                });
                this.setState({movies:items,isLoading:false});
             console.log("성공+search: "+search)
            }
        } catch(error){
            console.log("실패");
            console.log(error);
        }
    };

    componentDidMount(){
        this.getSearchMovie();
    };
    handleChange=(e:any)=>{
        /*input 이벤트인 onChange를 사용하여 검색어를 입력하면 실시간으로 검색정보(value)를 state에 저장한다.*/
        this.setState({value:e.target.value});
    };
    handleSubmit=(e:any)=>{
        /*input box에서 엔터를 입력시 정보가 전송되는 기본 이벤트 */
        e.preventDefault();
        this.getSearchMovie();
    };

    render(){
        const {moveis,isLoading}=this.state;

    return(
        <Fragment>
    <div style={{display:'flex', justifyContent:'center', padding:'3rem'}}>
        <Search placeholder="영화를 검색해 보세요! :D" type="text" value={this.state.value} onChange={this.handleChange} onSearch={onSearch} enterButton />
    </div>
    <div>
        <MovieCard/>
    </div>
    </Fragment>
   );
}
}

export default Movie_Search;







