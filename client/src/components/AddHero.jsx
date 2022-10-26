import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddHero = () => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState([])

    const [formInfo, setFormInfo] = useState({
        name: "",
        rating: "",
        img: ""
    });
    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/hero/new", formInfo)
        .then(response => {
            console.log(response)
            navigate("/")
        })
        .catch(err => {
            const errorResponse = err.response.data.err.errors;
            console.log("This is the catch: ", err.response.data.err.error)
            const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        });
    }

    return (
        <div className='container bg-light rounded mt-3'>
            <h1 className='bg-transparent'>Add Hero</h1>
            <form className='form form-control bg-light' onSubmit={submitHandler} >
                {errors.map((err, index) => <p key={index} className="text-danger" >{err}</p> )}
                <div className="mb-3 d-flex bg-light">
                    <label className='form-label bg-transparent'>Name: </label>
                    <input type="text" className='form-control bg-light' name='name' onChange={onChangeHandler} />
                </div>
                <div className="mb-3 d-flex bg-light">
                <label className='form-label bg-transparent'>Rating: </label>
                    <input type="number" className='form-control' name='rating' onChange={onChangeHandler} />
                </div>
                <div className="mb-3 d-flex bg-light">
                <label className='form-label bg-transparent'>Image: </label>
                    <input type="text" className='form-control' name='img' onChange={onChangeHandler} />
                </div>
                <div className='bg-light'>
                    <button className='btn btn-success'>Submit</button> | <Link to={'/'}><button className='btn btn-info'>Cancel</button></Link>
                </div>
            </form>
        </div>
    )
}

export default AddHero;

/*
    1. import useState
    2. import axios
    3. import useNavigate
*/