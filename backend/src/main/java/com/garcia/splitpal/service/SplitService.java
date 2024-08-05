package com.garcia.splitpal.service;

import com.garcia.splitpal.domain.split.Split;
import com.garcia.splitpal.dto.CreateSplitDTO;
import com.garcia.splitpal.repository.SplitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class SplitService {
    @Autowired
    SplitRepository splitRepository;

    public UUID create(CreateSplitDTO split){
        var splitEntity = new Split();
        splitEntity.setName(split.getName());
        splitEntity.setCategory(split.getCategory());
        splitEntity.setTotal(split.getTotal());
        splitEntity.setQrcode(split.getQrcode());

        var createdSplit = splitRepository.save(splitEntity);
        return createdSplit.getId();
    }

}
