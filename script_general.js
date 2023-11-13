(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"scripts":{"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPixels":TDV.Tour.Script.getPixels,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"isPanorama":TDV.Tour.Script.isPanorama,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"unregisterKey":TDV.Tour.Script.unregisterKey,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"playAudioList":TDV.Tour.Script.playAudioList,"resumePlayers":TDV.Tour.Script.resumePlayers,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"translate":TDV.Tour.Script.translate,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"clone":TDV.Tour.Script.clone,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"textToSpeech":TDV.Tour.Script.textToSpeech,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"mixObject":TDV.Tour.Script.mixObject,"cloneBindings":TDV.Tour.Script.cloneBindings,"getComponentByName":TDV.Tour.Script.getComponentByName,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setValue":TDV.Tour.Script.setValue,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"init":TDV.Tour.Script.init,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"initAnalytics":TDV.Tour.Script.initAnalytics,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"shareSocial":TDV.Tour.Script.shareSocial,"registerKey":TDV.Tour.Script.registerKey,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setLocale":TDV.Tour.Script.setLocale,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getOverlays":TDV.Tour.Script.getOverlays,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"createTween":TDV.Tour.Script.createTween,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getMainViewer":TDV.Tour.Script.getMainViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizStart":TDV.Tour.Script.quizStart,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"startMeasurement":TDV.Tour.Script.startMeasurement,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"openLink":TDV.Tour.Script.openLink,"getMediaByName":TDV.Tour.Script.getMediaByName,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMapLocation":TDV.Tour.Script.setMapLocation,"initQuiz":TDV.Tour.Script.initQuiz,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"executeJS":TDV.Tour.Script.executeJS,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"existsKey":TDV.Tour.Script.existsKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"showPopupImage":TDV.Tour.Script.showPopupImage,"showWindow":TDV.Tour.Script.showWindow,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getKey":TDV.Tour.Script.getKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"downloadFile":TDV.Tour.Script.downloadFile,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizFinish":TDV.Tour.Script.quizFinish,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera},"start":"this.init()","data":{"history":{},"textToSpeechConfig":{"stopBackgroundAudio":false,"pitch":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1,"rate":1},"defaultLocale":"de","locales":{"de":"locale/de.txt"},"name":"Player507"},"layout":"absolute","scrollBarColor":"#000000","backgroundColorRatios":[0],"gap":10,"children":["this.MainViewer"],"width":"100%","scrollBarMargin":2,"height":"100%","hash": "4da7635ba56b785b7c78eb4d42e64e052af594c6d9042fdd86a033f767424f48", "definitions": [{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935","camera":"this.panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_camera","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"subtitlesBackgroundColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadWidth":6,"playbackBarHeadShadowBlurRadius":3,"progressHeight":2,"playbackBarProgressBorderSize":0,"playbackBarHeadBorderSize":0,"data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColorRatios":[0],"firstTransitionDuration":0,"subtitlesTextShadowOpacity":1,"progressOpacity":0.7,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontColor":"#FFFFFF","height":"100%","width":"100%","toolTipFontFamily":"Arial","playbackBarBorderColor":"#FFFFFF","progressBarBorderRadius":2,"progressBorderSize":0,"subtitlesTextShadowVerticalLength":1,"playbackBarRight":0,"playbackBarBorderRadius":0,"subtitlesBottom":50,"playbackBarProgressBorderColor":"#000000","playbackBarBackgroundOpacity":1,"progressBottom":10,"playbackBarHeadShadow":true,"progressBorderColor":"#000000","playbackBarProgressBorderRadius":0,"playbackBarLeft":0,"class":"ViewerArea","id":"MainViewer","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"progressBarBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadHeight":15,"toolTipFontSize":"1.11vmin","playbackBarHeadBorderRadius":0,"toolTipBorderColor":"#767676","subtitlesTop":0,"surfaceReticleColor":"#FFFFFF","toolTipTextShadowColor":"#000000","playbackBarBorderSize":0,"subtitlesTextShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1,"toolTipPaddingTop":4,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarBottom":5,"toolTipShadowColor":"#333138","progressLeft":"33%","toolTipPaddingLeft":6,"progressBarBackgroundColorDirection":"horizontal","subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"surfaceReticleSelectionColor":"#FFFFFF","progressBorderRadius":2,"playbackBarHeadShadowOpacity":0.7,"toolTipPaddingRight":6,"toolTipFontColor":"#606060","subtitlesBorderColor":"#FFFFFF","subtitlesFontFamily":"Arial","progressBackgroundColorRatios":[0],"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderColor":"#000000","toolTipPaddingBottom":4,"propagateClick":false,"progressRight":"33%","subtitlesGap":0,"playbackBarHeight":10,"vrPointerColor":"#FFFFFF","minHeight":50,"progressBackgroundColor":["#000000"],"progressBarBackgroundColorRatios":[0],"minWidth":100,"vrPointerSelectionTime":2000},{"touchControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate","displayPlaybackBar":true,"class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation"},{"class":"PanoramaCamera","id":"panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_camera","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0}},{"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_0/{face}/0/{row}_{column}.jpg","rowCount":8,"colCount":48,"height":4096,"width":24576},{"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_0/{face}/1/{row}_{column}.jpg","rowCount":4,"colCount":24,"height":2048,"width":12288},{"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_0/{face}/2/{row}_{column}.jpg","rowCount":2,"colCount":12,"height":1024,"width":6144},{"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"url":"media/panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_0/{face}/3/{row}_{column}.jpg","rowCount":1,"colCount":6,"height":512,"width":3072},{"class":"TiledImageResourceLevel","tags":"mobilevr2gen","url":"media/panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_0/{face}/vr2gen/0.jpg","rowCount":1,"colCount":6,"height":2048,"width":12288}]},"thumbnailUrl":"media/panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_t.jpg"}],"thumbnailUrl":"media/panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_t.jpg","hfov":360,"label":trans('panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935.label'),"overlays":["this.overlay_D2FC67EF_C7B9_3A10_41D4_753B0694FA43"],"class":"Panorama","id":"panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935","hfovMax":130,"vfov":180,"data":{"label":"0001"}},{"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_D209284C_C7B9_3610_41E3_5764936C0BF4"],"data":{"label":"Text"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":["this.HotspotPanoramaOverlayTextImage_D35347E6_C7B9_3A10_41E3_DB93512125C6"],"id":"overlay_D2FC67EF_C7B9_3A10_41D4_753B0694FA43","maps":[]},{"class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_D209284C_C7B9_3610_41E3_5764936C0BF4","mapColor":"any"},{"hfov":10.5,"distance":50,"yaw":-4.94,"data":{"label":"Text"},"image":{"class":"ImageResource","levels":["this.imlevel_DF87CC71_C7B9_EEF0_41E1_2E6F07125F45"]},"pitch":25.28,"id":"HotspotPanoramaOverlayTextImage_D35347E6_C7B9_3A10_41E3_DB93512125C6","class":"HotspotPanoramaOverlayImage","vfov":10.5},{"class":"ImageResourceLevel","height":700,"id":"imlevel_DF87CC71_C7B9_EEF0_41E1_2E6F07125F45","url":trans('imlevel_DF87CC71_C7B9_EEF0_41E1_2E6F07125F45.url'),"width":700}],"defaultMenu":["fullscreen","mute","rotation"],"backgroundColor":["#FFFFFF"],"propagateClick":false,"class":"Player","id":"rootPlayer","minHeight":0,"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.17.js.map
})();
//Generated with v2023.1.17, Mon Nov 13 2023