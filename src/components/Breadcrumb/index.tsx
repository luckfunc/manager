import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import './style.less'
export default function MyBreadcrumb() {
    const breadcrumbNameMap: Record<string, string> = {
        '/dashboard': '仪表盘',
        '/person': '学生',
        '/room': '自习室',
        '/room/seat': '座位',
        '/announcement': '公告',
        '/comment': '评论',
        '/reply': '回复',
    };
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter((i) => i);
    const breadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        );
    });
    return (
        <>
            <div className="breadcrumb-box">
                <Breadcrumb>{breadcrumbItems}</Breadcrumb>
            </div>
        </>
    )
}
