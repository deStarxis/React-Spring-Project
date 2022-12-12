package com.ujjwal.humagain.springdata.repository;

import com.ujjwal.humagain.springdata.entity.ActivityLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityLogRepository extends JpaRepository<ActivityLog, Integer> {
}
