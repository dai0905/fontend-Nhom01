let value = 1; // Giá trị ban đầu  
const updateDisplay = () => {  
    document.getElementById('valueBtn').value = value;  
};  

document.getElementById('btnTang').addEventListener('click', () => {  
    const inputValue = parseInt(document.getElementById('valueBtn').value); // Lấy giá trị từ input  
    if (!isNaN(inputValue)) { // Kiểm tra xem giá trị có phải là số không  
        value = inputValue + 1; // Cộng giá trị nhập vào với biến value  
    }  
    updateDisplay(); // Cập nhật hiển thị  
});  

document.getElementById('btnGiam').addEventListener('click', () => {  
    const inputValue = parseInt(document.getElementById('valueBtn').value); // Lấy giá trị từ input 
    if (!isNaN(inputValue)) { // Kiểm tra xem giá trị có phải là số không  
        if (inputValue > 1) {  
            value = inputValue - 1; // Giảm giá trị  
        } else {  
            value = 1; // Giữ giá trị tối thiểu là 1  
        }
    }  
    updateDisplay(); // Cập nhật hiển thị  
});   

updateDisplay(); // Hiển thị giá trị ban đầu  


function validateInput(input) {  
    // Thay thế mọi ký tự không phải số hoặc khoảng trắng  
    input.value = input.value.replace(/[^0-9]/g, '');  
    
    // Nếu giá trị nhỏ hơn 1, đặt lại về 1  
    if (input.value !== '' && Number(input.value) < 1) {  
        input.value = 1;  
    }
} 