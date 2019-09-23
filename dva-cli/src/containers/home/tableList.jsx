import React, { Component } from 'react'
import { deleteOderId,addtianjia } from '../../api/oranges'
import  './scss/style.css'
import FromInputs from '../home/commit/fromInputs'
import { Table, Divider, Button, Modal } from 'antd';
import axios from 'axios'
const { Column, ColumnGroup } = Table;
export class TableList extends Component {
    state = {
        orderList: [],
        visible: false,
        confirmLoading: false,
    }
    componentDidMount() {
        this._getListorange()
    }
    //渲染列表
    _getListorange() {
        axios.get('/user/getOrderList').then(res => {
            this.setState({
                orderList: res.data.results
            })
        })
    }
    //删除
    delete(id) {
        deleteOderId(id).then(res => {
            if (res.data.code === 1) {
                this._getListorange();
            }
        })
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    hideModal = () => {
        this.setState({
            visible: false,
        });
    };

    _add = () => {
        this.setState({
            visible: false,
        })
    }


    render() {
        const { orderList } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    创建订单!!!
                </Button>
                <Modal
                    title="Addition"
                    visible={this.state.visible}
                    onOk={this._add}
                    onCancel={this.hideModal}
                    okText="确认"
                    cancelText="取消"  > 

                     <FromInputs  />
                </Modal>
                

                <Table dataSource={orderList} rowKey={'id'}>
                    <ColumnGroup title="聚划算">
                        <Column title="订单时间" dataIndex="namber" key="namber" />
                        <Column title="电话" dataIndex="hangye" key="hangye" />
                        <Column title="贷款划算" dataIndex="liulan" key="liulan" />
                        <Column title="Address" dataIndex="address" key="address"
                            title="操作"
                            key="action"
                            render={(text, record) => (
                                <span>
                                    <span>编辑 {record.lspanstName}</span>
                                    <Divider type="vertical" />
                                    <span onClick={() => this.delete(record.id)}>删除</span>
                                </span>
                            )}
                        />
                    </ColumnGroup>
                </Table>
            </div>
        )
    }
}

export default TableList
