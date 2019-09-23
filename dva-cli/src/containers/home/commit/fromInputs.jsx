import React, { Component } from 'react'
import { addtianjia } from '../../../api/oranges'
import { Form, Input, Select, DatePicker, Button } from 'antd';
const { Option } = Select;

export class FromInputs extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            console.log(values)
            // console.log(values.phone,values.prefix,values.select)
          if (!err) {
            addtianjia(values.phone,values.prefix,values.select).then(res=>{
                // if(res.data.code === 1){
                //     this.props.handleSubmit
                // }
                console.log(res)
            })
          }
        });
      };
    handleCancel() {
        this.props.handleCancel()
    }

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 25 },
            }
        }
        const { getFieldDecorator } = this.props.form;
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="订单时间">
                    {getFieldDecorator('datepicker')(<DatePicker />)}
                </Form.Item>

                <Form.Item label="电话">
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>

                <Form.Item label="聚划算" >
                    {getFieldDecorator('select', {
                        rules: [{ required: true, message: 'Please select your country!' }],
                    })(
                        <Select placeholder="Please select a country">
                            <Option value="1">500万</Option>
                            <Option value="2">1000万</Option>
                            <Option value="3">15000万</Option>
                        </Select>
                    )}
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    验证
                 </Button>
            </Form>
        )
    }
}
export default Form.create({ name: 'fromInputsDer' })(FromInputs)


