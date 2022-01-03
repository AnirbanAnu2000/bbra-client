import React, { useEffect, useState } from 'react';
import HomePageMember from '../HomePageMember/HomePageMember';
import '../HomePageMember/HomePageMember.css';

const HomePageMembers = () => {

    const [members, setMembers] = useState([]) 
    useEffect(() => {
        fetch('http://localhost:5000/members')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, [])

    return (
        <div id="services" style={{backgroundColor:"#f7e927"}}> 
            <div className="container py-5 border-bottom border-1 border-primary">
                <h1 style={{fontSize:"50px"}} className="services-heading text-primary text-center mb-5 mt-3 fw-bold">Our Members</h1>
                <div className="row justify-content-center">
                    {
                        members.slice(-6).map(member => <HomePageMember
                            key={member.id}
                            member={member}
                        ></HomePageMember>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePageMembers;


