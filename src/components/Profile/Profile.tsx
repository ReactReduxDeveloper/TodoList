import React from "react";
import c from './Profile.module.css'
import {MyPosts} from "./My posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (

        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>


    )


}