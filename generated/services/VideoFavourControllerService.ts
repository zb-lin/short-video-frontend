/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_int_ } from '../models/BaseResponse_int_';
import type { BaseResponse_Page_VideoVO_ } from '../models/BaseResponse_Page_VideoVO_';
import type { VideoFavourAddRequest } from '../models/VideoFavourAddRequest';
import type { VideoFavourQueryRequest } from '../models/VideoFavourQueryRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VideoFavourControllerService {

    /**
     * doVideoFavour
     * @param videoFavourAddRequest videoFavourAddRequest
     * @returns BaseResponse_int_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static doVideoFavourUsingPost(
videoFavourAddRequest: VideoFavourAddRequest,
): CancelablePromise<BaseResponse_int_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/video_favour/',
            body: videoFavourAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listMyFavourVideoByPage
     * @param videoFavourQueryRequest videoFavourQueryRequest
     * @returns BaseResponse_Page_VideoVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listMyFavourVideoByPageUsingPost(
videoFavourQueryRequest: VideoFavourQueryRequest,
): CancelablePromise<BaseResponse_Page_VideoVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/video_favour/my/list/page',
            body: videoFavourQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
