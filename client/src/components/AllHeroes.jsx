import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';


const AllHeroes = () => {
    const [allHeroes, setAllHeroes] = useState([])
    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/heroes")
        .then(response => {
            console.log(response.data.results)
            setAllHeroes(_.orderBy(response.data.results,['name'],['asc']))
    })
    .catch(err => console.log(err))
    }, [deleteToggle])

    const deleteHero = (e, id) => {
        console.log("Deleting Hero", id)
        axios.delete(`http://localhost:8000/api/hero/delete/${id}`)
        .then((response) => {
            console.log("Delete was successful", response)
            setDeleteToggle(!deleteToggle)
        })
        .catch(err => console.log("Error while deleting", err))
    }

    return (
        <div className='container'>
            <h1>All Heroes</h1>
            <Link to="/hero/add_hero" className='btn btn-info' >Add a Hero</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Hero Name</th>
                        <th scope='col'>Hero Rating</th>
                        <th scope='col'>Hero Image</th>
                        <th scope='col'>Action Items</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allHeroes.map((h, i) => {
                            return(
                                <tr key={i}>
                                    <td>{h.name}</td>
                                    <td>{h.rating}</td>
                                    <td><img src={h.img} alt="Super Hero Image" height="200px"/></td>
                                    <td><Link to={`/hero/edit/${h._id}`} className="btn btn-primary">Edit</Link> | <button className='btn btn-danger' onClick={(e) => {deleteHero(e, h._id)}}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllHeroes;

/*
    1. import useState
    2. import axios
    3. import useEffect
*/