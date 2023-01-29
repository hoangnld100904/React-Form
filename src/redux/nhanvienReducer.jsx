
const stateNhanVien = {
    mangNhanVien: [{ userId: '1', name: 'Hoang Le', phone: '0843357009', email: 'h10090413@gmail.com' }]
}
export const NhanVienReducer = (state = stateNhanVien, action) => {
    switch (action.type) {
        case 'AddUser':
            {
                state.mangNhanVien.push(action.nhanVien)
                return { ...state }
            }
            
        case 'DeleteUser':
            {
                state.mangNhanVien.splice(action.id, 1)
                return { ...state }
            }
        default:
            return { ...state }
    }

}