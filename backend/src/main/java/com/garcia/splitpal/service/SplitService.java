package com.garcia.splitpal.service;

import com.garcia.splitpal.domain.Split;
import com.garcia.splitpal.dto.split.CreateSplitDTO;
import com.garcia.splitpal.dto.split.UpdateSplitDTO;
import com.garcia.splitpal.repository.SplitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
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

        var createdSplit = this.splitRepository.save(splitEntity);
        return createdSplit.getId();
    }

    public Optional<Split> getSplitById(String id){
        return this.splitRepository.findById(UUID.fromString(id));
    }

    public List<Split> getAll(){
        return this.splitRepository.findAll();
    }

    public Split updateById(String id, UpdateSplitDTO body){
        var splitEntity = this.splitRepository.findById(UUID.fromString(id));
        if (splitEntity.isEmpty()) return null;

        var split = splitEntity.get();
        split.setCategory(body.getCategory());
        split.setName(body.getName());
        split.setTotal(body.getTotal());
        split.setQrcode(body.getQrcode());

        this.splitRepository.save(split);
        return split;
    }

    public void deleteById(String id){
        this.splitRepository.deleteById(UUID.fromString(id));
    }

}
