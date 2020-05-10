//Errors
import nodemailer from 'nodemailer';
import AlreadyExistError from '../../../errors-handle/already-exist.errors';
import NotFoundError from '../../../errors-handle/not-found.errors';
import ValidationError from '../../../errors-handle/validation.errors';
import ScheduleRepository from '../repositories/schedule.repository';
import AccountRepository from '../../accounts/repositories/account.repository';
import NotImplementError from '../../../errors-handle/not-implemented.errors';
import Unauthorized from '../../../errors-handle/unauthorized.errors';
import SubjectController from '../../subjects/controller/subject.controller'
import {
    ScheduleStatus,
} from '../commons/schedule.status';
import {
    AccountRole,
} from '../../accounts/commons/account-status.common'
// Util
import { GenerateToken, VerifyToken } from '../../../utils/jwt.util';
//Commom - Code
import {
    CreateScheduleErrors,
    GetSchedulesErrors,
    GetScheduleErrors,
    UpdateScheduleErrors,
    BlockScheduleErrors
} from '../error-codes/schedule.error-codes';

const url = require('url');
const querystring = require('querystring');
//
const createSchedule = async (req, res) => {
  const data = req.body;
  try {
    const subjects =  await SubjectController.getAllSubjectsForSchedule(req,res);
    const schedule = await ScheduleRepository.createSchedule(subjects,data);
    if (!schedule) throw new NotImplementError(CreateScheduleErrors.CREATE_FAIL);
    return res.onSuccess(schedule);
  } catch (error) {
      return res.onError(error);
  }

};



const getAllSchedules = async (req, res) => {

};


const getSchedule = async (req, res) => {

};

const updateSchedule = async (req, res) => {

};



const blockSchedule = async (req, res) => {

};


const getScheduleByFilter = async (req, res) => {

};
export default {
    createSchedule,
    getAllSchedules,
    getSchedule,
    updateSchedule,
    blockSchedule,
    getScheduleByFilter
};