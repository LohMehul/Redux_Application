import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from "./../Reducer/users";
import { Link } from 'react-router-dom';

const GetStoreData = () => {
    const users = useSelector(selectUser);
    return (
        <div>
            {JSON.stringify(users)}
            home page data
            <table>
                <thead>
                    <tr>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>test</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GetStoreData;