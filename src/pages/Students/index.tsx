import React from "react";
import Table from '../../components/Table'
import { fetchStudent } from "../../request/api";
import './style.less'

export function Students() {
    const gridManagerName = "home-table";
    const option = {
        gridManagerName,
        ajaxData: () => {
            return fetchStudent()
        },
        columnData: [
            {
                key: "student_id",
                text: "学生ID"
            },
            {
                key: "student_name",
                text: "学生名称"
            },
            {
                key: "create_time",
                text: "创建时间"
            }
        ]
    }
    return (
        <div className="home-table">
            <Table option={option}/>
        </div>
    )
}
