/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from "../models/BaseResponse_boolean_";
import type { BaseResponse_long_ } from "../models/BaseResponse_long_";
import type { BaseResponse_Page_VideoVO_ } from "../models/BaseResponse_Page_VideoVO_";
import type { BaseResponse_VideoVO_ } from "../models/BaseResponse_VideoVO_";
import type { DeleteRequest } from "../models/DeleteRequest";
import type { VideoAddRequest } from "../models/VideoAddRequest";
import type { VideoQueryRequest } from "../models/VideoQueryRequest";
import type { VideoUpdateRequest } from "../models/VideoUpdateRequest";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class VideoControllerService {
  /**
   * addVideo
   * @param videoAddRequest videoAddRequest
   * @returns BaseResponse_long_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static addVideoUsingPost(
    videoAddRequest: VideoAddRequest
  ): CancelablePromise<BaseResponse_long_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/video/add",
      body: videoAddRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * deleteVideo
   * @param deleteRequest deleteRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static deleteVideoUsingPost(
    deleteRequest: DeleteRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/video/delete",
      body: deleteRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getVideoVOById
   * @param id id
   * @returns BaseResponse_VideoVO_ OK
   * @throws ApiError
   */
  public static getVideoVoByIdUsingGet(
    id?: number
  ): CancelablePromise<BaseResponse_VideoVO_> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/video/get/vo",
      query: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * listVideoVOByPage
   * @param videoQueryRequest videoQueryRequest
   * @returns BaseResponse_Page_VideoVO_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static listVideoVoByPageUsingPost(
    videoQueryRequest: VideoQueryRequest
  ): CancelablePromise<BaseResponse_Page_VideoVO_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/video/list/page/vo",
      body: videoQueryRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * listMyVideoVOByPage
   * @param videoQueryRequest videoQueryRequest
   * @returns BaseResponse_Page_VideoVO_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static listMyVideoVoByPageUsingPost(
    videoQueryRequest: VideoQueryRequest
  ): CancelablePromise<BaseResponse_Page_VideoVO_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/video/my/list/page/vo",
      body: videoQueryRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * searchVideoVOByPage
   * @param videoQueryRequest videoQueryRequest
   * @returns BaseResponse_Page_VideoVO_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static searchVideoVoByPageUsingPost(
    videoQueryRequest: VideoQueryRequest
  ): CancelablePromise<BaseResponse_Page_VideoVO_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/video/search/page/vo",
      body: videoQueryRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateVideo
   * @param videoUpdateRequest videoUpdateRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateVideoUsingPost(
    videoUpdateRequest: VideoUpdateRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/video/update",
      body: videoUpdateRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
