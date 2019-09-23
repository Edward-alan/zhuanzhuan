"use strict";

const Controller = require("egg").Controller;
const fs = require("fs");
const path = require("path");

class userController extends Controller {
    async upload() {
        const file = this.ctx.request.files[0];
        const filepath = fs.readFileSync(file.filepath);
        const avatarPath = path.join(process.cwd(),'app/public/avatar', file.filename);
        const result = fs.writeFileSync(avatarPath,filepath);
        if (result) {
            this.ctx.body = {
                code: 0,
                msg: "No from"
            }
        } else {
            this.ctx.body = {
                code: 1,
                msg: "upload success",
                imgUrl: `http://localhost:7001/public/avatar/${file.filename}`
            };
        }
    }

//所有数据
    async getOrderList(){
        const {ctx} = this;
        const results = await this.app.mysql.select('getorangelist');
        ctx.body = {
            code:1,
            results
        }
    }

//删除数据
    async deleteOderId(){
        const {id} = this.ctx.request.body;
        const $sql = `delete from getorangelist where id='${id}'`
        const result = await this.app.mysql.query($sql)
        this.ctx.body = {
            code:1,
            result
        }
    }

//添加
  async addList(){
      const {namber,hangye,liulan} = this.ctx.request.body;
      const $sql = `insert into getorangelist (namber,hangye,liulan) values ('${namber}','${hangye}','${liulan}')`
      const result = await this.app.mysql.query($sql)
     this.ctx.body = {
         code:1,
         result
     }
  }
}

//登录页
    // async loginand(){
    //     this.ctx.body = {
    //         code:1,
    //     }
    // }


//从0~5条数据
// const result = await this.app.mysql.query(
//     `select * from list limit ${pagesize} , ${pagecont}`)


//改
// const $sql = `update userkoa set token='${token}' where id=${id}`;


//增
// const $sql = 
// `insert into getorangelist (username, password) values ("${username}", "${password}")`


module.exports = userController;
