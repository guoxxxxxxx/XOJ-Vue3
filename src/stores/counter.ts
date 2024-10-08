import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface userInfo {
  id: number,   
  nickname: String,
  student_id: number,
  faculty: String,
  className: String,
  gender: number,
  authority: number, 
  role: number,
  token: String
}

export const piniaStore = defineStore('store', {
  state: () => {
    return {
      userInfo: {} as userInfo,
      test: "test"
    }
  },
  persist: {
    storage: localStorage,
    paths: ["userInfo"]
  },
  actions: {
    // 保存用户登录信息
    saveUserInfo(id: number, token: string, nickname: string, student_id: number, faculty: string,
      className: string, gender: number, authority: number, role: number) {
        this.userInfo.id = id;
        this.userInfo.token = token;
        this.userInfo.nickname = nickname;
        this.userInfo.student_id = student_id;
        this.userInfo.faculty = faculty;
        this.userInfo.className = className;
        this.userInfo.gender = gender;
        this.userInfo.authority = authority;
        this.userInfo.role = role;
    }
  }
})