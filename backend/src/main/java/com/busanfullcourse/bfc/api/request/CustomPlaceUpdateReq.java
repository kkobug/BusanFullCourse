package com.busanfullcourse.bfc.api.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CustomPlaceUpdateReq {

    private String name;

    private String address;

    private Float lat;

    private Float lng;

}
