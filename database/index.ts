/*
 * @Author: vincent shixinchenhg@icloud.com
 * @Date: 2026-01-05 19:29:08
 * @LastEditors: vincent shixinchenhg@icloud.com
 * @LastEditTime: 2026-01-05 19:29:12
 * @FilePath: /nextjs-project/full-stack-app-demo/database/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Database models exports
export { default as Event } from './event.model';
export { default as Booking } from './booking.model';

// TypeScript interfaces exports
export type { IEvent } from './event.model';
export type { IBooking } from './booking.model';