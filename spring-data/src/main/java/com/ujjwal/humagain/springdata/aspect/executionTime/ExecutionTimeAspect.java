package com.ujjwal.humagain.springdata.aspect.executionTime;

import com.ujjwal.humagain.springdata.entity.ActivityLog;
import com.ujjwal.humagain.springdata.exception.AopIsAwesomeHeaderException;
import com.ujjwal.humagain.springdata.repository.ActivityLogRepository;
import lombok.RequiredArgsConstructor;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;

@Aspect
@Component
@RequiredArgsConstructor
public class ExecutionTimeAspect {

    private final HttpServletRequest httpServletRequest;
    private final ActivityLogRepository activityLogRepository;

    @Pointcut("@annotation(com.ujjwal.humagain.springdata.aspect.executionTime.ExecutionTime)")
    public void executionTimeAnnotation(){

    }

//    Second way
//    @Pointcut("execution(* com.ujjwal.humagain.springdata.controller.*.*(..))")
//    public void executionTimeAnnotation() {
//
//    }

    @Around("executionTimeAnnotation()")
    public Object calculateExecutionTime(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        long start = System.nanoTime();
        var result = proceedingJoinPoint.proceed();
        long finish = System.nanoTime();
        ActivityLog activityLog = new ActivityLog();
        activityLog.setDate(LocalDate.now());
        activityLog.setDuration(finish - start);
        activityLog.setOperation(proceedingJoinPoint.getSignature().toShortString());
        activityLogRepository.save(activityLog);
        return result;
    }

//    @Pointcut("execution(* com.ujjwal.humagain.springdata.service.*.*(..))")
//    public void executionPointCutForServices() {
//
//    }
//
//    @Before("executionPointCutForServices()")
//    public void servicePostMethodsInterceptor(JoinPoint joinPoint) throws AopIsAwesomeHeaderException {
//        if (httpServletRequest.getMethod().equals("POST")) {
//            if (httpServletRequest.getHeader("AOP-IS-AWESOME") == null) {
//                String message = "Header does not contain AOP-IS-AWESOME";
//                System.out.println(message);
//                throw new AopIsAwesomeHeaderException(message);
//            }
//        }
//    }
}
