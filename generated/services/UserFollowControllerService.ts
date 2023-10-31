/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_UserFollowVO_ } from '../models/BaseResponse_Page_UserFollowVO_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { UserFollowAddRequest } from '../models/UserFollowAddRequest';
import type { UserFollowQueryRequest } from '../models/UserFollowQueryRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserFollowControllerService {

    /**
     * addUserFollow
     * @param userFollowAddRequest userFollowAddRequest
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUserFollowUsingPost(
userFollowAddRequest: UserFollowAddRequest,
): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/userFollow/add',
            body: userFollowAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteUserFollow
     * @param deleteRequest deleteRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteUserFollowUsingPost(
deleteRequest: DeleteRequest,
): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/userFollow/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listUserFollowVOByPage
     * @param userFollowQueryRequest userFollowQueryRequest
     * @returns BaseResponse_Page_UserFollowVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listUserFollowVoByPageUsingPost(
userFollowQueryRequest: UserFollowQueryRequest,
): CancelablePromise<BaseResponse_Page_UserFollowVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/userFollow/my/list/page/vo',
            body: userFollowQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
