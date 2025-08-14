// Updated by trungquandev.com's author on May 13 2023
// Sample Eslint config for React project
// Cấu hình ESLint cho dự án React + Node
module.exports = {
  env: {
    browser: true, // Cho phép các biến toàn cục của trình duyệt (window, document...)
    es2020: true,  // Hỗ trợ cú pháp ES2020
    node: true     // Cho phép các biến toàn cục của Node.js (require, module, __dirname...)
  },
  extends: [
    'eslint:recommended',           // Sử dụng bộ luật ESLint cơ bản
    'plugin:react/recommended',     // Thêm các rule dành cho React
    'plugin:react/jsx-runtime',     // Cho phép JSX runtime mới (React 17+ không cần import React)
    'plugin:react-hooks/recommended'// Các rule dành cho React Hooks
  ],
  parserOptions: {
    ecmaVersion: 'latest',          // Sử dụng phiên bản ECMAScript mới nhất
    sourceType: 'module'            // Cho phép dùng cú pháp import/export ES Module
  },
  settings: {
    react: { version: '18.2' }      // Xác định version React để ESLint biết cách áp dụng rule phù hợp
  },
  plugins: [
    'react',        // Plugin hỗ trợ React
    'react-hooks',  // Plugin kiểm tra React Hooks
    'react-refresh' // Plugin hỗ trợ React Fast Refresh
  ],
  rules: {
    'react-refresh/only-export-components': 'warn', // Cảnh báo khi export không phải component (ảnh hưởng Hot Reload)
    'react-hooks/rules-of-hooks': 'error',          // Bắt buộc tuân thủ quy tắc Hooks (chỉ gọi trong function component hoặc custom hook)
    'react-hooks/exhaustive-deps': 'warn',          // Cảnh báo nếu thiếu dependencies trong useEffect, useCallback...
    'react/prop-types': 0,                          // Tắt yêu cầu khai báo propTypes
    'react/display-name': 0,                        // Tắt yêu cầu đặt displayName cho component

    // Quy tắc JavaScript chung
    'no-console': 1,                  // Cảnh báo khi dùng console.log
    'no-lonely-if': 1,                // Cảnh báo nếu if lồng nhau có thể viết gọn
    'no-unused-vars': 1,              // Cảnh báo biến khai báo nhưng không dùng
    'no-trailing-spaces': 1,          // Cảnh báo khoảng trắng thừa ở cuối dòng
    'no-multi-spaces': 1,             // Cảnh báo nhiều khoảng trắng liên tiếp
    'no-multiple-empty-lines': 1,     // Cảnh báo nhiều dòng trống liên tiếp
    'space-before-blocks': ['error', 'always'], // Bắt buộc có space trước dấu {
    'object-curly-spacing': [1, 'always'],      // Cảnh báo nếu thiếu/dư space trong object { key: value }
    'indent': ['warn', 2],            // Cảnh báo nếu không indent 2 space
    'semi': [1, 'never'],              // Cảnh báo nếu có dấu chấm phẩy ; (yêu cầu bỏ ;)
    'quotes': ['error', 'single'],    // Bắt buộc dùng dấu nháy đơn ''
    'array-bracket-spacing': 1,       // Cảnh báo nếu có space thừa trong array [ 1, 2 ]
    'linebreak-style': 0,             // Bỏ qua check xuống dòng LF/CRLF (tránh lỗi khi dev trên Windows/Mac)
    'no-unexpected-multiline': 'warn',// Cảnh báo khi code xuống dòng sai gây lỗi
    'keyword-spacing': 1,             // Cảnh báo nếu thiếu space sau từ khóa (if, else, return...)
    'comma-dangle': 1,                 // Cảnh báo dấu phẩy thừa ở cuối object/array
    'comma-spacing': 1,                // Cảnh báo thiếu space sau dấu phẩy
    'arrow-spacing': 1                 // Cảnh báo thiếu space trước/sau => trong arrow function
  }
}
