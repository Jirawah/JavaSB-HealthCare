import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScoreService, ScoreResponse } from '../../service/score.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    RouterModule
  ],
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  score?: ScoreResponse;

  constructor(
    private route: ActivatedRoute,
    private scoreService: ScoreService
  ) {}

  ngOnInit(): void {
    const patientId = Number(this.route.snapshot.paramMap.get('id'));
    this.scoreService.getScore(patientId).subscribe(data => {
      this.score = data;
    });
  }
}
