import { Card } from 'antd';

export default function Skeleton() {
  return (
    <Card style={{ width: '100%', height: "100%", background: 'none', border: 'none' }} loading={true}></Card>
  )
}
