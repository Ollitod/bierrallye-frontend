import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvaluationService} from '../shared/service/backend/evaluation/evaluation.service';
import {IEvaluation} from '../shared/model/evaluation.model';
import {ColumnSpec, ExpandableDynamicTableModule} from 'ngx-gepardec-mat';
import {IStationEvaluation} from '../shared/model/station-evaluation.model';
import {MatCardModule} from '@angular/material/card';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [CommonModule, ExpandableDynamicTableModule, MatCardModule],
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {

  evaluations: IEvaluation[] = [];

  columnsSpecs: ColumnSpec<IEvaluation>[] = [
    {
      displayedColumn: 'boxId',
      header: 'Box-ID'
    },
    {
      displayedColumn: 'position',
      header: 'Position'
    },
    {
      displayedColumn: 'startTime',
      header: 'Startzeit'
    },

    {
      displayedColumn: 'endTime',
      header: 'Zielzeit'
    },
    {
      displayedColumn: 'duration',
      header: 'Zeit'
    },
    {
      displayedColumn: 'penalty',
      header: 'Strafe'
    },
    {
      displayedColumn: 'finalTime',
      header: 'Gesamtzeit'
    }
  ];

  detailColumnSpecs: ColumnSpec<IStationEvaluation>[] = [
    {
      displayedColumn: 'station',
      header: 'Station'
    },
    {
      displayedColumn: 'penalty',
      header: 'Strafe'
    }
  ];

  baseIndex = 0;

  constructor(
    private evaluationService: EvaluationService
  ) {
  }

  ngOnInit(): void {
    this.evaluationService.getEvaluations().subscribe(evaluations => {
      this.evaluations = evaluations;
      console.log(evaluations);
    });
  }

  onPageChanged(event: PageEvent) {
    this.baseIndex = event.pageSize * event.pageIndex;
  }
}
