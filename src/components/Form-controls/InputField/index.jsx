import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    // Băt buộc 100% phải có form,name
    name: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
    label: PropTypes.string,
    disable: PropTypes.bool,
};

function InputField(props) {

    const {name,form,label,disable} = props;

    const {formState} = form;

    const {errors} = formState;

    // Chỉ hiện thị lỗi khi đã touched,click và có lỗi tồn tại trong errors
    const hasError = formState.touchedFields[name] && errors[name];

    return (
        // Controller: tự động binding vào trong TextField các hàm, sự kiện như là onChange,onBlur,value,name....
        <Controller 
            name={name}                 
            control={form.control}
            render={({field}) => (
                <TextField
		            {...field}
                    fullWidth
                    label={label}
                    disable={disable}
                    // formState.touchedFields[name] nó sẽ trả về giá trị true, false nhưng && errors[name] nó sẽ trả về object mà error chỉ nhận về giá trị true hoặc false do đó ta thêm cặp dấu !! để chuyển hasError về kiểu boolean
                    error={!!hasError}      
                    // Hiển thị lỗi
                    helperText={errors[name]?.message}
                />
            )}
        />

    );
}

export default InputField;