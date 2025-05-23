// Copyright 2024 Specter Ops, Inc.
//
// Licensed under the Apache License, Version 2.0
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0

import { Typography } from '@mui/material';
import { FC } from 'react';

const LinuxAbuse: FC = () => {
    return (
        <Typography variant='body2'>
            Domain Controllers store all Active Directory credentials and configurations for all principals in the
            domain. If an adversary gains administrative access to a Domain Controller, there are several options at
            their disposal for compromising domain identities and domain-managed systems. Please see the references
            section for more information.
        </Typography>
    );
};

export default LinuxAbuse;
