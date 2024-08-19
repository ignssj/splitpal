package com.garcia.splitpal.controller;

import com.garcia.splitpal.domain.Split;
import com.garcia.splitpal.dto.split.CreateSplitDTO;
import com.garcia.splitpal.dto.split.SplitDTO;
import com.garcia.splitpal.dto.split.UpdateSplitDTO;
import com.garcia.splitpal.service.SplitService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/splits")
@Tag(name = "Split")
public class SplitController {

    @Autowired
    SplitService splitService;

    @Operation(summary = "Create a split", description = "Creates a split and returns its id")
    @PostMapping
    public ResponseEntity<String> create(@Valid @RequestBody CreateSplitDTO body) {
        UUID id = splitService.create(body);
        return ResponseEntity.created(URI.create("splits/" + id.toString())).build();
    }

    @Operation(summary = "Get split by id", description = "Returns a split by its id if it exists")
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Split>> getById(@PathVariable("id") String id) {
        var split = this.splitService.getSplitById(id);
        if (split.isEmpty())
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(split);
    }

    @Operation(summary = "Get all splits", description = "Return an array containing all splits")
    @GetMapping
    public ResponseEntity<List<SplitDTO>> getAll(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String qrcode) {
        var list = this.splitService.getAll(name, category, qrcode);
        if (list.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(list);
    }

    @Operation(summary = "Update split by id", description = "Updates a split by its id and returns the updated register")
    @PutMapping("/{id}")
    public ResponseEntity<Split> updateById(@PathVariable("id") String id, @RequestBody UpdateSplitDTO body) {
        var updated = this.splitService.updateById(id, body);
        if (updated == null)
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(updated);
    }

    @Operation(summary = "Removes a split by id", description = "Removes a split by its id if it exists")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") String id) {
        this.splitService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
