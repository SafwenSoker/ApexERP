import { Employees } from '../user-management-portal/employees.model';
import { AssessmentStatus } from './assessment-status';

export class Assessment {
    //ADD PRIVATE HERE
    id: number;
    fiscalYear: number;
    cycleId: number;
    employeeId: string;
    submissionDate: Date;
    status: AssessmentStatus;
    deadlineSelfAssessment: Date;
    deadlineManagerReview: Date;
    questions: Question[];
    // technicalQuestions: Question[];
    // observationalQuestions: Question[];
    relatedManager: number;
    // managerTechnicalResponses: ManagerResponse[];
    // managerObservationalResponses: ManagerResponse[];
    meetingNotes: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(
        id: number,
        fiscalYear: number,
        cycleId: number,
        employeeId: string,
        submissionDate: Date,
        status: AssessmentStatus,
        deadlineSelfAssessment: Date,
        deadlineManagerReview: Date,
        questions: Question[],
        // technicalQuestions: Question[],
        // observationalQuestions: Question[],
        relatedManager: number,
        // managerTechnicalResponses: ManagerResponse[],
        // managerObservationalResponses: ManagerResponse[],
        meetingNotes: string,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.id = id;
        this.fiscalYear = fiscalYear;
        this.cycleId = cycleId;
        this.employeeId = employeeId;
        this.submissionDate = submissionDate;
        this.status = status;
        this.deadlineSelfAssessment = deadlineSelfAssessment;
        this.deadlineManagerReview = deadlineManagerReview;
        this.questions = questions;
        // this.technicalQuestions = technicalQuestions;
        // this.observationalQuestions = observationalQuestions;
        this.relatedManager = relatedManager;
        // this.managerTechnicalResponses = managerTechnicalResponses;
        // this.managerObservationalResponses = managerObservationalResponses;
        this.meetingNotes = meetingNotes;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    getId(): number {
        return this.id;
    }

    getFiscalYear(): number {
        return this.fiscalYear;
    }

    getCycleId(): number {
        return this.cycleId;
    }

    getEmployeeId(): string {
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

    getQuestions(): Question[] {
        return this.questions;

    }

    // getTechnicalQuestions(): Question[] {
    //     return this.technicalQuestions;
    // }

    // getObservationalQuestions(): Question[] {
    //     return this.observationalQuestions;
    // }

    getRelatedManager(): number {
        return this.relatedManager;
    }

    // getManagerTechnicalResponses(): ManagerResponse[] {
    //     return this.managerTechnicalResponses;
    // }
    // getManagerObservationalResponses(): ManagerResponse[] {
    //     return this.managerObservationalResponses;
    // }

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
    type: string;
    text: string;
    score: number;
    managerScore: number;
}

// export interface ManagerResponse {
//     questionId: number;
//     newScore: number;
// }
