import React from 'react'

export default function Todo({ data, callBack }) {
    return (
        <div className="card">
            <div className="row p-4">
                <div className="col-10">
                    <h2 className="secondary">{data.title}</h2>
                    <p>{data.body}</p>
                </div>
                <div className="m-auto">
                    <button className="btn-danger btn btn-large" onClick={() => { callBack(data) }}> Delete</button>
                </div>
            </div>
        </div>
    )
}
