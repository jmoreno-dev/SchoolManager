package com.example.schoolmanager.controller;

import com.example.schoolmanager.entity.Student;
import com.example.schoolmanager.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getAll() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{studentId}")
    public Student getById(@PathVariable("studentId") Long studentId) {
        return studentService.getStudentById(studentId);
    }

    @GetMapping("/count")
    public int getCount() {
        return studentService.getStudentCount();
    }

    @PostMapping
    public void saveUpdate(@RequestBody Student student) {
        studentService.saveOrUpdate(student);
    }

    @DeleteMapping("/{studentId}")
    public void delete(@PathVariable("studentId") Long studentId) {
        studentService.deleteStudent(studentId);
    }

    @DeleteMapping
    public void deleteAll() {
        studentService.deleteAllStudents();
    }
}
