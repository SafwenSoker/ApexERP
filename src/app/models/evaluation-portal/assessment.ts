import { AssessmentStatus } from "./assessment-status";

export class Assessment {
    //ADD PRIVATE HERE
     id: number;
     cycleId: number;
     employeeId: number;
     submissionDate: Date;
     status: AssessmentStatus;
     deadlineSelfAssessment: Date;
     deadlineManagerReview: Date;
     technicalQuestions: Question[];
     observationalQuestions: Question[];
     managerResponses: ManagerResponse[];
     meetingNotes: string;
     createdAt: Date;
     updatedAt: Date;
  
    constructor(
      id: number,
      cycleId: number,
      employeeId: number,
      submissionDate: Date,
      status: AssessmentStatus,
      deadlineSelfAssessment: Date,
      deadlineManagerReview: Date,
      technicalQuestions: Question[],
      observationalQuestions: Question[],
      managerResponses: ManagerResponse[],
      meetingNotes: string,
      createdAt: Date,
      updatedAt: Date
    ) {
      this.id = id;
      this.cycleId = cycleId;
      this.employeeId = employeeId;
      this.submissionDate = submissionDate;
      this.status = status;
      this.deadlineSelfAssessment = deadlineSelfAssessment;
      this.deadlineManagerReview = deadlineManagerReview;
      this.technicalQuestions = technicalQuestions;
      this.observationalQuestions = observationalQuestions;
      this.managerResponses = managerResponses;
      this.meetingNotes = meetingNotes;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  
    getId(): number {
      return this.id;
    }
  
    getCycleId(): number {
      return this.cycleId;
    }
  
    getEmployeeId(): number {
      return this.employeeId;
    }
  
    getSubmissionDate(): Date {
      return this.submissionDate;
    }
  
    getStatus(): AssessmentStatus {
      return this.status;
    }
  
    getDeadlineSelfAssessment(): Date {
      return this.deadlineSelfAssessment;
    }
  
    getDeadlineManagerReview(): Date {
      return this.deadlineManagerReview;
    }
  
    getTechnicalQuestions(): Question[] {
      return this.technicalQuestions;
    }
  
    getObservationalQuestions(): Question[] {
      return this.observationalQuestions;
    }
  
    getManagerResponses(): ManagerResponse[] {
      return this.managerResponses;
    }
  
    getMeetingNotes(): string {
      return this.meetingNotes;
    }
  
    getCreatedAt(): Date {
      return this.createdAt;
    }
  
    getUpdatedAt(): Date {
      return this.updatedAt;
    }
  }
  
  export interface Question {
    id: number;
    text: string;
    score: number;
  }
  
  export interface ManagerResponse {
    questionId: number;
    newScore: number;
  }
  