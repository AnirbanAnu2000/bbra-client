import React, { useEffect, useState } from 'react';
import '../Members/Members.css';
import Member from '../Member/Member';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Members = () => {

    const [members, setMembers] = useState([]) 
    useEffect(() => {
        fetch('https://glacial-springs-00927.herokuapp.com/members')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, [])

    return (
        <div id="services" style={{backgroundColor:"#f7e927"}}> 
            <Header></Header>
            <div className="container py-5 border-bottom border-1 border-primary">
                <h1 style={{fontSize:"50px"}} className="services-heading text-primary text-center mb-5 mt-3 fw-bold">Our All Members</h1>
                <div className="row justify-content-center">
                    {
                        members.map(member => <Member
                            key={member.id}
                            member={member}
                        ></Member>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Members;


