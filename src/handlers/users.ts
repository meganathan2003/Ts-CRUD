/**
 * Here the file all logic will be 
 * there like getall users and create
 * user like that
 * 
 * 
 * @author Meganathan
 */

import { Request, Response } from "express";

export function getUsers(request: Request, response: Response) {
    response.send([]);
}

export function getUserById(request: Request, response: Response) {
    response.send({});
}