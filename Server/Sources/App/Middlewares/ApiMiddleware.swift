//
//  ApiMiddleware.swift
//  Swiftog
//
//  Created by Jin Wang on 22/8/17.
//
//

import HTTP

final class ApiMiddleware: Middleware {
    func respond(to request: Request, chainingTo next: Responder) throws -> Response {
        let response = try next.respond(to: request)
        
        response.headers["Access-Control-Allow-Origin"] = "*"
        
        return response
    }
}

