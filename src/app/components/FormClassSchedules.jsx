import React from "react";
import Filter from "./Filter";
import { days } from "../class-schedules/add/days";

function FormClassSchedules({ props }) {
    return (
        <div className="form">
            <form onSubmit={props.handleSubmit}>
                <div className="filter row mt-5">
                    <Filter
                        setSection={(e) =>
                            props.setAcademicDivision(e.target.value)
                        }
                        setSquad={(e) => props.setClassRoom(e.target.value)}
                    />
                    <div className="type col-2">
                        <select
                            className="form-control"
                            onChange={(e) => props.setType(e.target.value)}
                        >
                            <option
                                value="يرجي اختيار الجدول"
                                selected
                                disabled
                                onChange={(e) => props.setType(e.target.value)}
                            >
                                يرجي اختيار الجدول
                            </option>
                            <option value="جدول المحاضرات">
                                جدول المحاضرات
                            </option>
                            <option value="جدول السكاشن">جدول السكاشن</option>
                        </select>
                    </div>
                    <div className="btn col-2">
                        <span className="btn btn-dark" onClick={props.addField}>
                            اضافة مادة
                        </span>
                    </div>
                </div>
                <div className="days d-flex justify-content-around mt-5">
                    {days.map((day, index) => {
                        return (
                            <label
                                key={index}
                                className={`btn ${
                                    day === props.mainDay
                                        ? "btn-dark"
                                        : "btn-outline-dark"
                                } `}
                            >
                                <input
                                    type="radio"
                                    id={index}
                                    name="day"
                                    value={day}
                                    hidden
                                    onChange={() => {
                                        props.handleDayChange(day);
                                    }}
                                />
                                {day}
                            </label>
                        );
                    })}
                </div>
                <div className="inputs row gy-3 mt-5">
                    {props.feildCount.map((e, index) => {
                        return (
                            <>
                                {props &&
                                    props.inputs &&
                                    props.inputs.map((ele, i) => {
                                        return (
                                            <div
                                                className="name-material col-4"
                                                key={i}
                                            >
                                                <input
                                                    type={ele.type}
                                                    className="form-control"
                                                    disabled={
                                                        props.mainDay
                                                            ? false
                                                            : true
                                                    }
                                                    placeholder={
                                                        ele.placeHolder
                                                    }
                                                    name={ele.name}
                                                    onChange={(e) => {
                                                        props.changeDay(
                                                            e,
                                                            index
                                                        );
                                                    }}
                                                />
                                            </div>
                                        );
                                    })}
                            </>
                        );
                    })}
                </div>
                <div className="btns mt-5">
                    <button
                        className="btn submit btn-dark"
                        type="submit"
                        disabled={props.disabled}
                    >
                        حفظ
                    </button>
                    <button
                        className="btn cancle btn-outline-dark me-4"
                        type="button"
                        onClick={() => {
                            window.history.back();
                        }}
                    >
                        الغاء
                    </button>
                </div>
            </form>
        </div>
    );
}
export default FormClassSchedules;
