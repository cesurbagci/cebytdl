declare module 'cebytdl' {
  import { ClientRequest } from 'http';
  import { Readable } from 'stream';

  namespace ytdl {
    type downloadOptions = {
      quality?: 'lowest' | 'highest' | 'highestaudio' | 'lowestaudio' | 'highestvideo' | 'lowestvideo' | string | number;
      filter?: 'video' | 'videoonly' | 'audio' | 'audioonly' | ((format: videoFormat) => boolean);
      format?: videoFormat;
      range?: {
        start?: number;
        end?: number;
      };
      begin?: string | number | Date;
      liveBuffer?: number;
      requestOptions?: {};
      highWaterMark?: number;
      lang?: string;
    }

    type videoFormat = {
      itag: number;
      url: string;
      mimeType?: string;
      bitrate?: number | string;
      width?: number;
      height?: number;
      initRange?: { start: string; end: string };
      indexRange?: { start: string; end: string };
      lastModified: string;
      contentLength: string;
      quality: 'tiny' | 'small' | 'medium' | 'large' | 'hd720' | 'hd1080' | 'hd1440' | string;
      qualityLabel: '144p' | '240p' | '270p' | '360p' | '480p' | '720p' | '1080p' | '1440p' | '2160p' | '4320p';
      projectionType: 'RECTANGULAR';
      fps?: number;
      averageBitrate: number;
      audioQuality?: 'ADIO_QUALITY_LOW' | 'ADIO_QUALITY_MEDIUM';
      colorInfo?: {
        primaries: string;
        transferCharacteristics: string;
        matrixCoefficients: string;
      };
      highReplication?: boolean;
      approxDurationMs: string;
      audioSampleRate?: string;
      audioChannels?: number;

      // Added by ytdl-core
      container: 'flv' | '3gp' | 'mp4' | 'webm' | 'ts';
      codecs: string;

      live: boolean;
      isHLS: boolean;
      isDashMPD: boolean;
    }

    type videoInfo = {
      iv_load_policy?: string;
      iv_allow_in_place_switch?: string;
      iv_endscreen_url?: string;
      iv_invideo_url?: string;
      iv3_module?: string;
      rmktEnabled?: string;
      uid?: string;
      vid?: string;
      focEnabled?: string;
      baseUrl?: string;
      storyboard_spec?: string;
      serialized_ad_ux_config?: string;
      player_error_log_fraction?: string;
      sffb?: string;
      ldpj?: string;
      videostats_playback_base_url?: string;
      innertube_context_client_version?: string;
      t?: string;
      fade_in_start_milliseconds: string;
      timestamp: string;
      ad3_module: string;
      relative_loudness: string;
      allow_below_the_player_companion: string;
      eventid: string;
      token: string;
      atc: string;
      title: string;
      cr: string;
      apply_fade_on_midrolls: string;
      cl: string;
      fexp: string[];
      apiary_host: string;
      fade_in_duration_milliseconds: string;
      fflags: string;
      ssl: string;
      pltype: string;
      media: {
        image?: string;
        category: string;
        category_url: string;
        game?: string;
        game_url?: string;
        year?: number;
        song?: string;
        artist?: string;
        artist_url?: string;
        writers?: string;
        licensed_by?: string;
      };
      author: {
        id: string;
        name: string;
        avatar: string;
        verified: boolean;
        user: string;
        channel_url: string;
        user_url: string;
      };
      enabled_engage_types: string;
      hl: string;
      is_listed: string;
      gut_tag: string;
      apiary_host_firstparty: string;
      enablecsi: string;
      csn: string;
      status: string;
      afv_ad_tag: string;
      idpj: string;
      sfw_player_response: string;
      account_playback_token: string;
      encoded_ad_safety_reason: string;
      tag_for_children_directed: string;
      no_get_video_log: string;
      ppv_remarketing_url: string;
      fmt_list: string[][];
      ad_slots: string;
      fade_out_duration_milliseconds: string;
      instream_long: string;
      allow_html5_ads: string;
      core_dbp: string;
      ad_device: string;
      itct: string;
      root_ve_type: string;
      excluded_ads: string;
      aftv: string;
      loeid: string;
      cver: string;
      shortform: string;
      dclk: string;
      csi_page_type: string;
      ismb: string;
      gpt_migration: string;
      loudness: string;
      ad_tag: string;
      of: string;
      probe_url: string;
      vm: string;
      afv_ad_tag_restricted_to_instream: string;
      gapi_hint_params: string;
      cid: string;
      c: string;
      oid: string;
      ptchn: string;
      as_launched_in_country: string;
      avg_rating: string;
      fade_out_start_milliseconds: string;
      length_seconds: string;
      midroll_prefetch_size: string;
      allow_ratings: string;
      thumbnail_url: string;
      iurlsd: string;
      iurlmq: string;
      iurlhq: string;
      iurlmaxres: string;
      ad_preroll: string;
      tmi: string;
      trueview: string;
      host_language: string;
      innertube_api_key: string;
      show_content_thumbnail: string;
      afv_instream_max: string;
      innertube_api_version: string;
      mpvid: string;
      allow_embed: string;
      ucid: string;
      plid: string;
      midroll_freqcap: string;
      ad_logging_flag: string;
      ptk: string;
      vmap: string;
      watermark: string[];
      video_id: string;
      dbp: string;
      ad_flags: string;
      html5player: string;
      formats: videoFormat[];
      published: number;
      description: string;
      related_videos: relatedVideo[];
      video_url: string;
      no_embed_allowed?: boolean;
      age_restricted: boolean;
      player_response: {
        playabilityStatus: {
          status: string;
        };
        streamingData: {
          expiresInSeconds: string;
          formats: {}[];
          adaptiveFormats: {}[];
        };
        videoDetails: {
          videoId: string;
          title: string;
          lengthSeconds: number;
          keywords: string[];
          channelId: string;
          isCrawlable: boolean;
          thumbnail: {
            thumbnails: {
              url: string;
              width: number;
              height: number;
            }[];
          };
          viewCount: number;
          author: string;
          isLiveContent: boolean;
        };
      };
    }

    type relatedVideo = {
      id?: string;
      title?: string;
      author?: string;
      length_seconds?: string;
      iurlmq?: string;
      short_view_count_text?: string;
      session_data: string;
      endscreen_autoplay_session_data?: string;
      iurlhq?: string;
      playlist_iurlhq?: string;
      playlist_title?: string;
      playlist_length?: string;
      playlist_iurlmq?: string;
      video_id?: string;
      list?: string;
      thumbnail_ids?: string;
    }

    function getBasicInfo(url: string, callback?: (err: Error, info: videoInfo) => void): Promise<videoInfo>;
    function getBasicInfo(url: string, options?: downloadOptions, callback?: (err: Error, info: videoInfo) => void): Promise<videoInfo>;
    function getInfo(url: string, callback?: (err: Error, info: videoInfo) => void): Promise<videoInfo>;
    function getInfo(url: string, options?: downloadOptions, callback?: (err: Error, info: videoInfo) => void): Promise<videoInfo>;
    function downloadFromInfo(info: videoInfo, options?: downloadOptions): Readable;
    function chooseFormat(format: videoFormat | videoFormat[], options?: downloadOptions): videoFormat | Error;
    function filterFormats(formats: videoFormat | videoFormat[], filter?: 'video' | 'videoonly' | 'audio' | 'audioonly' | ((format: videoFormat) => boolean)): videoFormat[];
    function validateID(string: string): boolean;
    function validateURL(string: string): boolean;
    function getURLVideoID(string: string): string | Error;
    function getVideoID(string: string): string | Error;
  }

  function ytdl(link: string, options?: ytdl.downloadOptions): Readable;

  export = ytdl;
}
